<template>
    <div id="content" class="ui-content">
        <div class="ui-content-body">
            <div class="ui-container">
                <h2 class="title__body">{{sectionName}}</h2>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel">
                            <div class="panel-body">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--right side widget start-->
            <div class="ui-aside-right " ui-aside-right>

                <!--customer start-->
                <div class="aside-widget">
                    <h5>Online Customer</h5>
                    <ul class="contact-list">
                        <li class="online">
                            <div class="media">
                                <a href="#" class="pull-left media-thumb">
                                    <img alt="" src="imgs/a0.jpg" class="media-object">
                                    <span class="online"></span>
                                </a>
                                <div class="media-body">
                                    <strong>John Doe</strong>
                                    <small>General Manager at TB</small>
                                </div>
                            </div><!-- media -->
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#" class="pull-left media-thumb">
                                    <img alt="" src="imgs/a1.jpg" class="media-object">
                                    <span class="offline"></span>
                                </a>
                                <div class="media-body">
                                    <strong>Jonathan Smith</strong>
                                    <small>Lead Designer</small>
                                </div>
                            </div><!-- media -->
                        </li>

                        <li class="online">
                            <div class="media">
                                <a href="#" class="pull-left media-thumb">
                                    <img alt="" src="imgs/a2.jpg" class="media-object">
                                    <span class="busy"></span>
                                </a>
                                <div class="media-body">
                                    <strong>Margarita Rose</strong>
                                    <small>Human Resource Manager</small>
                                </div>
                            </div><!-- media -->
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#" class="pull-left media-thumb">
                                    <img alt="" src="imgs/a0.jpg" class="media-object">
                                    <span class="away"></span>
                                </a>
                                <div class="media-body">
                                    <strong>Mr. Kameron De</strong>
                                    <small>Marketing Officer</small>
                                </div>
                            </div><!-- media -->
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#" class="pull-left media-thumb">
                                    <img alt="" src="imgs/a2.jpg" class="media-object">
                                    <span class="offline"></span>
                                </a>
                                <div class="media-body">
                                    <strong>Mr. Mosa</strong>
                                    <small>Development Manager</small>
                                </div>
                            </div><!-- media -->
                        </li>
                    </ul>
                </div>
                <!--customer end-->

                <!--stock start-->
                <div class="aside-widget">
                    <h5>Recent Stocks</h5>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>DOWJ</td>
                            <td>19,764.00</td>
                            <td><small class="label label-success">+ 0.08%</small></td>
                        </tr>
                        <tr>
                            <td>AAPL</td>
                            <td>116.90</td>
                            <td><small class="label label-danger">- 0.29%</small></td>
                        </tr>
                        <tr>
                            <td>SBUX</td>
                            <td>50.33</td>
                            <td><small class="label label-warning">+ 0.23%</small></td>
                        </tr>
                        <tr>
                            <td>NKE</td>
                            <td>164.00</td>
                            <td><small class="label label-success">+ 0.08%</small></td>
                        </tr>
                        <tr>
                            <td>YHOO</td>
                            <td>764.00</td>
                            <td><small class="label label-danger">- 0.91%</small></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--stock end-->

                <!--task start-->
                <div class="aside-widget">
                    <h5>Task Pending</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">
                                <div class="task-info">
                                    Wp Development (66%)
                                </div>
                                <div class="progress progress-striped">
                                    <div style="width: 66%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66"
                                         role="progressbar" class="progress-bar progress-bar-warning">
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="task-info">
                                    Dashboard Design (80%)
                                </div>
                                <div class="progress progress-striped">
                                    <div style="width: 80%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80"
                                         role="progressbar" class="progress-bar progress-bar-success ">
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="task-info">
                                    Marketing (40%)
                                </div>
                                <div class="progress progress-striped">
                                    <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40"
                                         role="progressbar" class="progress-bar progress-bar-info">
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="task-info">
                                    Mobile App Development (33%)
                                </div>
                                <div class="progress progress-striped">
                                    <div style="width: 33%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80"
                                         role="progressbar" class="progress-bar progress-bar-danger">
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="text-center">
                            <a href="#" class="btn btn-sm btn-info btn-block">See All Pending Tasks</a>
                        </li>
                    </ul>
                </div>
                <!--task end-->

            </div>
            <!--right side widget end-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "Body",
        computed: {
            sectionName: function () {
                switch (this.$route.name) {
                    case 'edit-contract':
                        return 'Изменение договора';
                    case 'contracts-list':
                        return 'Список договоров';
                    case 'invoices':
                        return 'Счета';
                    case 'acts':
                        return 'Аткы выполненных работ';
                    case 'dashboard':
                        return 'Главная';
                    case 'new-contract':
                        return 'Создать договор';
                    case 'invoices-list':
                        return 'Список счетов';
                    case 'edit-invoice':
                        return 'Изменение счета';
                    case 'new-invoice':
                        return 'Новый счет';
                    case 'invoice-delete':
                        return 'Удаление счета!';
                    case 'acts-list':
                        return 'Список актов';
                    case 'edit-act':
                        return 'Изменение акта';
                    case 'new-act':
                        return 'Новый акт';
                    case 'act-delete':
                        return 'Удаление акта!';
                    case 'contract-delete':
                        return 'Удаление договора!';
                    default:
                        return this.$route.name
                }
            }
        }
    }
</script>

<style scoped>
    .title__body {
        text-align: center;
    }

</style>