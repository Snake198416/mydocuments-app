<!--<template>-->
<!--    <header id="header" class="ui-header">-->

<!--        <div class="navbar-header">-->
<!--            &lt;!&ndash;logo start&ndash;&gt;-->
<!--            <router-link to="/">-->
<!--            <a href="index.html" class="navbar-brand">-->
<!--                <span class="logo"><img src="./../assets/images/logo-dark.png" alt=""/></span>-->
<!--                <span class="logo-compact"><img src="./../assets/images/logo-icon-dark.png" alt=""/></span>-->
<!--            </a>-->
<!--            </router-link>-->
<!--            &lt;!&ndash;logo end&ndash;&gt;-->
<!--        </div>-->

<!--        <div class="search-dropdown dropdown pull-right visible-xs">-->
<!--            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i-->
<!--                    class="fa fa-search"></i></button>-->
<!--            <div class="dropdown-menu">-->
<!--                <form action="">-->
<!--                    <input class="form-control" placeholder="Search here..." type="text">-->
<!--                </form>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="navbar-collapse nav-responsive-disabled">-->

<!--&lt;!&ndash;            toggle buttons start&ndash;&gt;-->
<!--            <ul class="nav navbar-nav">-->
<!--                <li>-->
<!--                    <a class="toggle-btn" data-toggle="ui-nav" href="">-->
<!--                        <i class="fa fa-bars"></i>-->
<!--                    </a>-->
<!--                </li>-->
<!--            </ul>-->
<!--&lt;!&ndash;             toggle buttons end&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                <input type="checkbox" id="check-menu">&ndash;&gt;-->
<!--&lt;!&ndash;                <label for="check-menu">MENU</label>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="burger-line first"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="burger-line second"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="burger-line third"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="burger-line fourth"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                <nav class="main-menu">&ndash;&gt;-->
<!--&lt;!&ndash;                    <a href="#">Пункт 1</a>&ndash;&gt;-->
<!--&lt;!&ndash;                    <a href="#">Пункт 2</a>&ndash;&gt;-->
<!--&lt;!&ndash;                    <a href="#">Пункт 3</a>&ndash;&gt;-->
<!--&lt;!&ndash;                    <a href="#">Пункт 4</a>&ndash;&gt;-->
<!--&lt;!&ndash;                    <a href="#">Пункт 5</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </nav>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            &lt;!&ndash;search start&ndash;&gt;-->
<!--            <form class="search-content hidden-xs" action="">-->
<!--                <button type="submit" name="search" class="btn srch-btn">-->
<!--                    <i class="fa fa-search"></i>-->
<!--                </button>-->
<!--                <input type="text" class="form-control" name="keyword" placeholder="Search here...">-->
<!--            </form>-->
<!--            &lt;!&ndash;search end&ndash;&gt;-->

<!--            &lt;!&ndash;notification start&ndash;&gt;-->
<!--            <ul class="nav navbar-nav navbar-right">-->
<!--                <li class="dropdown">-->
<!--                    <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">-->
<!--                        <i class="fa fa-bell-o"></i>-->
<!--                        <span class="badge">5</span>-->
<!--                    </a>-->
<!--                    &lt;!&ndash;dropdown &ndash;&gt;-->
<!--                    <ul class="dropdown-menu dropdown-menu&#45;&#45;responsive">-->
<!--                        <div class="dropdown-header">Notifications (12)</div>-->
<!--                        <ul class="Notification-list Notification-list&#45;&#45;small niceScroll list-group">-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar Notification__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <i class="Notification__avatar-icon fa fa-bolt"></i>-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>Server Error Report</b></p>-->
<!--                                        <p class="Notification__highlight-time">1.2 hours ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar Notification__avatar&#45;&#45;success pull-left" href="">-->
<!--                                        <i class="Notification__avatar-icon fa fa-user-plus"></i>-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>New Member Registration</b></p>-->
<!--                                        <p class="Notification__highlight-time">2 hours ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar pull-left" href="">-->
<!--                                        <img src="imgs/a0.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>Tomas Edison</b> and 4 other-->
<!--                                            people like your post “keep clam and watch the fizz”.</p>-->
<!--                                        <p class="Notification__highlight-time">1 day ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->

<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;unread" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar pull-left" href="">-->
<!--                                        <img src="imgs/a0.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>Luciad Extic</b> can join-->
<!--                                            conference.</p>-->
<!--                                        <p class="Notification__highlight-time">1 hour ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;unread" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar Notification__avatar&#45;&#45;info pull-left" href="">-->
<!--                                        <i class="Notification__avatar-icon fa fa-database"></i>-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>Database Error</b></p>-->
<!--                                        <p class="Notification__highlight-time">2 days ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar Notification__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <i class="Notification__avatar-icon fa fa-bolt"></i>-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>Server Error Report</b></p>-->
<!--                                        <p class="Notification__highlight-time">1.2 hours ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Notification list-group-item">-->
<!--                                <button class="Notification__status Notification__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Notification__avatar Notification__avatar&#45;&#45;success pull-left" href="">-->
<!--                                        <i class="Notification__avatar-icon fa fa-user-plus"></i>-->
<!--                                    </div>-->
<!--                                    <div class="Notification__highlight">-->
<!--                                        <p class="Notification__highlight-excerpt"><b>New Member Registration</b></p>-->
<!--                                        <p class="Notification__highlight-time">2 hours ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                        <div class="dropdown-footer"><a href="">View more</a></div>-->
<!--                    </ul>-->
<!--                    &lt;!&ndash;/ dropdown &ndash;&gt;-->
<!--                </li>-->

<!--                <li class="dropdown">-->
<!--                    <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">-->
<!--                        <i class="fa fa-envelope-o"></i>-->
<!--                        <span class="badge">5</span>-->
<!--                    </a>-->
<!--                    &lt;!&ndash;dropdown &ndash;&gt;-->
<!--                    <ul class="dropdown-menu dropdown-menu&#45;&#45;responsive">-->
<!--                        <div class="dropdown-header">Messages (12)</div>-->
<!--                        <ul class="Message-list niceScroll list-group">-->
<!--                            <li class="Message list-group-item">-->
<!--                                <button class="Message__status Message__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Message__avatar Message__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <img src="imgs/a2.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Message__highlight">-->
<!--                                        <span class="Message__highlight-name">Lubida Teresa</span>-->
<!--                                        <p class="Message__highlight-excerpt">Hello there! Can you send me a photo-->
<!--                                            please?</p>-->
<!--                                        <p class="Message__highlight-time">1 hour ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Message list-group-item">-->
<!--                                <button class="Message__status Message__status&#45;&#45;unread" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Message__avatar Message__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <img src="imgs/a1.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Message__highlight">-->
<!--                                        <span class="Message__highlight-name">Sara Souaidan</span>-->
<!--                                        <p class="Message__highlight-excerpt">Hello there!</p>-->
<!--                                        <p class="Message__highlight-time">1 hour ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Message list-group-item">-->
<!--                                <button class="Message__status Message__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Message__avatar Message__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <img src="./../assets/images/a0.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Message__highlight">-->
<!--                                        <span class="Message__highlight-name">Addy Osmany</span>-->
<!--                                        <p class="Message__highlight-excerpt">Blah Blah Blah</p>-->
<!--                                        <p class="Message__highlight-time">1 hour ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Message list-group-item">-->
<!--                                <button class="Message__status Message__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Message__avatar Message__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <img src="imgs/a0.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Message__highlight">-->
<!--                                        <span class="Message__highlight-name">Picaso Patel</span>-->
<!--                                        <p class="Message__highlight-excerpt">Bhai, are you there?</p>-->
<!--                                        <p class="Message__highlight-time">2 years ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="Message list-group-item">-->
<!--                                <button class="Message__status Message__status&#45;&#45;read" type="button"-->
<!--                                        name="button"></button>-->
<!--                                <a href="">-->
<!--                                    <div class="Message__avatar Message__avatar&#45;&#45;danger pull-left" href="">-->
<!--                                        <img src="imgs/a0.jpg" alt="...">-->
<!--                                    </div>-->
<!--                                    <div class="Message__highlight">-->
<!--                                        <span class="Message__highlight-name">Bengali Tiger</span>-->
<!--                                        <p class="Message__highlight-excerpt">Mu ha ha</p>-->
<!--                                        <p class="Message__highlight-time">10 years ago</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                        <div class="dropdown-footer"><a href="">View more</a></div>-->
<!--                    </ul>-->
<!--                    &lt;!&ndash;/ dropdown &ndash;&gt;-->
<!--                </li>-->

<!--                <li class="dropdown dropdown-usermenu">-->
<!--                    <a href="#" class=" dropdown-toggle" data-toggle="dropdown" aria-expanded="true">-->
<!--                        <div class="user-avatar"><img src="./../assets/images/a0.jpg" alt="..."></div>-->
<!--                        <span class="hidden-sm hidden-xs">John Doe</span>-->
<!--                        &lt;!&ndash;<i class="fa fa-angle-down"></i>&ndash;&gt;-->
<!--                        <span class="caret hidden-sm hidden-xs"></span>-->
<!--                    </a>-->
<!--                    <ul class="dropdown-menu dropdown-menu-usermenu pull-right">-->
<!--                        <li><a href="#"><i class="fa fa-cogs"></i> Settings</a></li>-->
<!--                        <li><a href="#"><i class="fa fa-user"></i> Profile</a></li>-->
<!--                        <li><a href="#"><i class="fa fa-commenting-o"></i> Feedback</a></li>-->
<!--                        <li><a href="#"><i class="fa fa-life-ring"></i> Help</a></li>-->
<!--                        <li class="divider"></li>-->
<!--                        <li><a href="#"><i class="fa fa-sign-out"></i> Log Out</a></li>-->
<!--                    </ul>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <a data-toggle="ui-aside-right" href=""><i class="glyphicon glyphicon-option-vertical"></i></a>-->
<!--                </li>-->
<!--            </ul>-->
<!--            &lt;!&ndash;notification end&ndash;&gt;-->

<!--        </div>-->

<!--    </header>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Header"-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--    .form-control1{-->
<!--        border: 2px solid black;-->
<!--    }-->

<!--</style>-->

