<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|confirmed', // 'confirmed' = required_with:password_confirmation|same:password_confirmation
            'password_confirmation' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'name.string' => 'Name must be string',
            'email.required' => 'Email is required',
            'email.string' => 'Email must be string',
            'email.email' => 'Email must be in supporting email formats',
            'email.unique' => 'Email is already exist',
            'password.required' => 'Password is required',
            'password.string' => 'Password must be string',
            'password_confirmation.required' => 'Confirmation password is required',
            'password_confirmation.string' => 'Confirmation password must be string',
        ];
    }
}
