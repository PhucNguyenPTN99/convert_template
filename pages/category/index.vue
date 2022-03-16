<template>
    <div>
        <div class="page-title db">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> Marketing <small class="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Blog</a></li>
                            <li class="breadcrumb-item active">Marketing</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <section class="section lb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget-no-style">
                                <Subscribe></Subscribe>
                            </div>
                            <RecentPost></RecentPost>
                            <Advertise></Advertise>
                            <InstagramFeed></InstagramFeed>
                            <PopularCategories></PopularCategories>
                        </div>
                    </div>

                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-custom-build" v-for="article of news.articles" :key="article.id">
                                <div class="blog-box wow fadeIn">
                                    <div class="post-media">
                                        <a href="marketing-single.html" title="">
                                            <img :src="article.urlToImage" alt="" class="img-fluid">
                                            <div class="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="blog-meta big-meta text-center" >
                                        <PostShare></PostShare>
                                        <h4><nuxt-link :to="'/blogs/' + article.source.id">{{article.title}}</nuxt-link></h4>
                                        <p>{{article.description}}</p>
                                    </div>
                                </div>
                                <hr class="invis">
                            </div>
                        </div>

                        <hr class="invis">
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Footer from '~/components/Footer'
    import PopularCategories from '~/components/PopularCategories'
    import InstagramFeed from '~/components/InstagramFeed'
    import RecentPost from '~/components/RecentPost'
    import Advertise from '~/components/Advertise'
    import Subscribe from '~/components/Subscribe'
    import Pagination from '~/components/Pagination'
    import PostShare from '~/components/PostShare'
    import {init} from '../share'

    export default {
        fetch: init,
        components: {
            Footer,
            PopularCategories,
            InstagramFeed,
            RecentPost,
            Advertise,
            Subscribe,
            Pagination,
            PostShare
        },

        computed: {
            ...mapState({
                homes: state => state.homes,
                news: state => state.news
            })
        }
    }
</script>
<style scoped>
    a, h1, h2, h3, h4, h5, h6 {
    color: #000000;
}
</style>