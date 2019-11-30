<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="metro-bootstrap-master/css/metro-bootstrap.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<header class="clearfix">
    <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">My App</a>
        </div>

        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/">Home</a></li>
                <li class="active"><a href="/">Dashboard</a></li>
                <li class="active"><a href="/">Route 2</a></li>
                <li class="active"><a href="/">Route 3</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="/logout">Sign out</a></li>
            </ul>
        </div>
    </nav>
</header>
<section class="main container-fluid">
    <div class="container">
        <h1>Home</h1>

        <div class="row-fluid">
            <div class="col-md-3">Sidebar</div>
            <div class="col-md-9">
                <tabset>
                    <tab heading="Search">
                        <div>
                            <form action="home" method="post">
                                <p>
                                    Name: <input type="text" name="name"/>
                                </p>

                                <p>
                                    <input type="submit" value="Enter name">
                                </p>
                            </form>
                        </div>
                    </tab>
                    <tab heading="Next">
                        Yet More Static content
                    </tab>
                </tabset>
            </div>
        </div>
    </div>
</section>
<script src="bootstrap/js/bootstrap.js"></script>
</body>
</html>