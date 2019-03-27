<html>
    <head>
        <title>App Name - @yield('title')</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        {{-- <link href="http://localhost:8888/laravel-crud/public/css/app.css" rel="stylesheet" > --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">

    </head>
    <body>
      <header>
        <div class="container">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Search</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
        {{-- @section('sidebar')
            This is the master sidebar.
        @show --}}

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
