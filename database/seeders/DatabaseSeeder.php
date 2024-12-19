<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Create Roles
        $roles = ['admin', 'guest'];

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }

        // Create user and assign admin role
        $adminUser = User::create([
            'name' => 'admin',
            'email' => 'admin@chirper.com',
            'password' => Hash::make('password'),
            'email_verified_at' => Carbon::now()->toDateTimeString()
        ]);

        $adminUser->assignRole('admin');

        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'user@chirper.com',
        ]);

        $user->assignRole('guest');
    }
}
