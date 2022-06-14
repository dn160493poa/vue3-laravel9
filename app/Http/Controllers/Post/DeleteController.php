<?php

namespace App\Http\Controllers\Post;

use App\Http\Requests\Post\DeleteRequest;

class DeleteController extends BaseController
{
    public function __invoke(DeleteRequest $deleteRequest){

        $data = $deleteRequest->validated();

        $delete_result = $this->service->deletePost($data);

        return response(['result' => $delete_result]);
    }
}
