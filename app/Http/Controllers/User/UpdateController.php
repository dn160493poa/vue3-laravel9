<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\UpdateRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;

class UpdateController extends BaseController
{

    public function __invoke(UpdateRequest $request, User $user)
    {
        $data = $request->validated();

        $user = $this->service->updateUser($data, $user);

        return new UserResource($user);
    }
}
