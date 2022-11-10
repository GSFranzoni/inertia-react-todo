<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTodoRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Controller;
use Inertia\Response;

class TodoController extends Controller
{
    public function __invoke(Request $request): Response
    {
        return inertia('TodoList', [
            'todos' => [
                [
                    'id' => 1,
                    'description' => 'Learn Inertia.js',
                    'completed' => false,
                ],
                [
                    'id' => 2,
                    'description' => 'Learn Laravel',
                    'completed' => true,
                ],
                [
                    'id' => 3,
                    'description' => 'Learn Vue.js',
                    'completed' => false,
                ],
            ],
        ]);
    }

    /**
     * @param CreateTodoRequest $request
     * @return RedirectResponse
     */
    public function store(CreateTodoRequest $request): RedirectResponse
    {
        $request->user()->todos()->create($request->validated());
        return redirect()
            ->intended(route('todos.index'))
            ->with('success', __('todo.created'));
    }
}
