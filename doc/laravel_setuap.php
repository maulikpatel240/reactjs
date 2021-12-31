https://laravel.com/docs/8.x/controllers

sudo chmod 777 -R laravel-backend-frontend

Laravel Project setuap

1. composer create-project laravel/laravel example-app
2. cd example-app
3. php artisan ui bootstrap --auth
4. npm install
5. export NODE_OPTIONS=--openssl-legacy-provider
6. node run dev
7. php artisan serve
8. php artisan migrate
9. composer require doctrine/dbal
10. php artisan migrate:status

cache:clearCommand
php artisan cache:clear
php artisan route:cache
php artisan config:cache

Create Migrate table 
php artisan make:migration create_salon_companies_table

Remove migrate
php artisan migrate:rollback

Create Seeder table 
php artisan make:seeder RoleSeeder   New seeder FileCreate
php artisan db:seed  databaseseeder file call
php artisan db:seed --class=RoleSeeder

DB import in class
use Illuminate\Support\Facades\DB;


Creating indexs db in key
primary
unique
index
spatialindex

Any update bs4 to bs5 node js run command
npx mix

Create laravel controller command
php artisan make:controller PhotoController --resource --model=Photo

Create laravel model command
php artisan make:model Flight

Create laravel request command
php artisan make:request StorePostRequest

Create laravel controller component
php artisan make:component Message


//Salon history
php artisan make:migration create_saloon_companies_table --path=/database/migrations/salon_modify
php artisan make:migration create_saloon_services_table --path=/database/migrations/salon_modify
php artisan make:migration create_saloon_staff_services_table --path=/database/migrations/salon_modify

//Product manage
php artisan make:migration create_categories_table --path=/database/migrations/products_modify
php artisan make:migration create_products_table --path=/database/migrations/products_modify

//User Modify
php artisan make:migration create_users_table
php artisan make:migration create_users_table

//Common table
php artisan make:migration create_config_table --path=/database/migrations/common
php artisan make:migration create_email_templates_table --path=/database/migrations/common
php artisan make:migration create_templatefield_table --path=/database/migrations/common



Migrate directory table
php artisan migrate --path=/path/to/your/migration/directory


Cache clear coomand
php artisan cache:clear


Create Middleware
php artisan make:middleware EnsureTokenIsValid

Create Middleware Error pages
php artisan vendor:publish --tag=laravel-errors

1.php artisan make:migration create_users_table
2.php artisan make:migration create_categories_add_column_table --table=categories
3.php artisan make:migration create_categories_remove_column_table --table=categories
4.php artisan make:migration create_categories_add_foreign_key_table --table=categories
5.php artisan make:migration create_categories_remove_foreign_key_table --table=categories



Laravel 8 Multi Authentication – Role Based Login Tutorial
https://onlinewebtutorblog.com/laravel-8-multi-authentication-role-based-login-tutorial/

php artisan grid_view:publish --only=views
php artisan grid_view:publish --only=lang


Any change mix file scss
1. export NODE_OPTIONS=--openssl-legacy-provider
2. node run dev

Live mix changes command npm run watch


npm install anchor-js
npm install is_js
npm install overlayscrollbars


Admin panel generated packages
Install gridview and detail view library

https://github.com/itstructure/laravel-detail-view
https://github.com/itstructure/laravel-grid-view

Multiple form clonData library
https://www.jqueryscript.net/demo/clone-field-increment-id/

Storage folder pass public
php artisan storage:link


"Itstructure\\GridView\\": "composer/itstructure/laravel-grid-view/src/"

'name' => 'required',
            'panel' => 'required',



SET  @num := 0;

UPDATE your_table SET id = @num := (@num+1);

ALTER TABLE your_table AUTO_INCREMENT =1;