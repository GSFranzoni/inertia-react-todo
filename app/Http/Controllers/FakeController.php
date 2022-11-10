<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FakeController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
        ]);

        return redirect()
            ->route('home')
            ->with('success', __('fake.success'));
    }
}
