<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Tests\TestCase;

class UserApiTest extends TestCase
{
   use RefreshDatabase;

   public function test_api_users_retorna_lista()
   {
       User::factory()->count(3)->create();

       $response = $this->getJson('/api/users');

       $response->assertStatus(200)
                ->assertJsonCount(3);
    }
}
