import React from 'react'

function NotFound() {
    return (
    <div class="bg-gray-100 flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-9xl font-bold text-gray-800">404</h1>
            <p class="text-2xl text-gray-600 mt-4">Oops! Page not found</p>
            <p class="text-gray-500 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <a href="/" class="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">Go Home</a>
        </div>
    </div>
    )
}

export default NotFound
