<template>
    <div id="ui" class="ui">

        <!--header start-->
<!--        <Header/>-->
        <!--header end-->

        <!--sidebar start-->
        <Aside/>
        <!--sidebar end-->

        <!--main content start-->
        <Body/>
        <!--main content end-->
    </div>
</template>

<script>
    import Header from './components/Header'
    import Aside from "./components/Aside";
    import Body from "./components/Body";


    export default {
        name: 'App',
        components: {
            Body,
            Aside,
            Header,
        }
    }
</script>
