<?php
namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Response as InertiaResponse;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }

    /**
     * @param LoginRequest $request
     * @return RedirectResponse
     */
    public function __invoke(LoginRequest $request): RedirectResponse
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return redirect()
                ->intended(route('home'))
                ->with('success', __('auth.success'));
        }

        return back()
            ->withInput($request->only('email'))
            ->withErrors([
                'email' => __('auth.failed'),
            ]);
    }

    /**
     * @return InertiaResponse
     */
    public function index(): InertiaResponse
    {
        return inertia('Auth/Login');
    }
}
