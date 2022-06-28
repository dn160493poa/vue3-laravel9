<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
    <title>DemoBlog</title>
    <link rel="icon" href="{{ asset('img/logo_150x150.png') }}" sizes="32x32" />
    <link rel="icon" href="{{ asset('img/logo_300x300.png.png') }}" sizes="192x192" />
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>
