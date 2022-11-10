<?php

namespace App\Http\Controllers;

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
}
