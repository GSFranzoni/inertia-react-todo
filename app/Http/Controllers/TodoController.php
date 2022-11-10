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
        $todos = $request->user()->todos()->get()->toArray();
        return inertia('TodoList', [
            'todos' => $todos,
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

    /**
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(Request $request, int $id): RedirectResponse
    {
        $request->user()->todos()->findOrFail($id)->delete();
        return redirect()
            ->intended(route('todos.index'))
            ->with('success', __('todo.deleted'));
    }
}
