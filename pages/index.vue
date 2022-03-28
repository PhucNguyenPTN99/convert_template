<template>
    <div>
        <section id="cta" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 align-self-center">
                        <h2>A digital marketing blog</h2>
                        <p class="lead"> Aenean ut hendrerit nibh. Duis non nibh id tortor consequat cursus at mattis felis. Praesent sed lectus et neque auctor dapibus in non velit. Donec faucibus odio semper risus rhoncus rutrum. Integer et ornare mauris.</p>
                        <a href="#" class="btn btn-primary">Try for free</a>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <Subscribe></Subscribe>
                    </div>
                </div>
            </div>
        </section>
        <section class="section lb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper" >
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
                                        <h4><nuxt-link :to="'/category/' + article.source.id">{{article.title}}</nuxt-link></h4>
                                        <p>{{article.description}}</p>
                                    </div>
                                </div>
                                <hr class="invis">
                            </div>
                        </div>
                        <hr class="invis">
                        <Pagination></Pagination>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <RecentPost></RecentPost>
                            <Advertise></Advertise>
                            <InstagramFeed></InstagramFeed>
                            <PopularCategories></PopularCategories>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
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
    import {init} from './share'
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
            PostShare,
        },

        computed: {
            ...mapState(
                ['homes', 'news']
            )
        }
    }
</script>

<style scoped>
    a {
        color: #111111;
    }
</style>