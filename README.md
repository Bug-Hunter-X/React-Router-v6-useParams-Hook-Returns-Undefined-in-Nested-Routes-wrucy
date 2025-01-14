# React Router v6 useParams Hook Returns Undefined in Nested Routes

This repository demonstrates a common issue and its solution when using the `useParams` hook in nested routes with React Router v6.  The problem occurs because `useParams` returns `undefined` before the route fully resolves. This is especially problematic when the component using `useParams` is rendered conditionally.

The `NestedRoutesBug.js` file showcases the buggy implementation, while `NestedRoutesSolution.js` provides a corrected version using useEffect to handle the asynchronous nature of route resolution.

## Problem

The `useParams` hook may return `undefined` if accessed before the route's parameters are available, leading to runtime errors. This is particularly likely in nested routes or conditionally rendered components.

## Solution

The solution involves using the useEffect hook to ensure that the route parameters are available before attempting to access them.