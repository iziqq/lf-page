import router from "@/common/router";
import {getSavedSeatId} from "@/common/seat/seat.ts";

const API_BASE_URL = 'https://lf-api-ena6ajaaedgegqf5.westeurope-01.azurewebsites.net/api';
export interface ApiErrorResponse {
    message: string;
    code?: string;
    status: number;
}
async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const seatId = getSavedSeatId();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.headers as Record<string, string>,
    };

    if (seatId) {
        headers['x-seat-id'] = seatId;
    }

    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
        ...options,
        headers
    };

    const response = await fetch(url, config);

    if (response.status === 401 && !endpoint.includes('/auth/')) {
        const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        localStorage.setItem('redirectAfterLogin', currentPath);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        await router.push('/');
    }

    if (!response.ok) {
        throw {
            message: response.statusText,
            code: response.headers.get('X-Error-Code') ?? undefined,
            status: response.status
        } as ApiErrorResponse;
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return await response.json();
    }

    return {} as T;
}

/** GET request */
export async function get<T>(endpoint: string): Promise<T> {
    return apiFetch<T>(endpoint);
}

/** POST request */
export async function post<T, B = unknown>(endpoint: string, body?: B): Promise<T> {
    return apiFetch<T>(endpoint, {
        method: 'POST',
        body: body ? JSON.stringify(body) : undefined
    });
}

/** PUT request */
export async function patch<T, B = unknown>(endpoint: string, body: B): Promise<T> {
    return apiFetch<T>(endpoint, {
        method: 'PATCH',
        body: JSON.stringify(body)
    });
}

/** DELETE request */
export async function remove<T>(endpoint: string): Promise<T> {
    return apiFetch<T>(endpoint, { method: 'DELETE' });
}
