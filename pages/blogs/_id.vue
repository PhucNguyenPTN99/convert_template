<template>
    <div id="wrapper">
        <section class="section lb m3rem">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                <ol class="breadcrumb hidden-xs-down">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Blog</a></li>
                                    <li class="breadcrumb-item active">The golden rules you need to know for a positive life</li>
                                </ol>
                                <span class="color-yellow"><a href="marketing-category.html" title="">Lifestyle</a></span>
                                <h3>The golden rules you need to know for a positive life</h3>
                                <div class="blog-meta big-meta">
                                    <small><a href="marketing-single.html" title="">21 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Jessica</a></small>
                                    <small><a href="#" title=""><i class="fa fa-eye"></i> 2344</a></small>
                                </div>
                                <PostShare></PostShare>
                            </div>
                            <div class="single-post-media">
                                <img src="~/assets/upload/market_blog_06.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="blog-content" v-for="article of news.articles" :key="article.source.id">  
                                <div class="pp">
                                    <p>{{article.description}}</p>
                                    <h3><strong>{{article.title}}</strong></h3>
                                    <p>{{article.content}}</p>
                                    <p>{{article.publishedAt}}</p>
                                </div>
                                <img :src="article.urlToImage" alt="" class="img-fluid img-fullwidth">
                            </div>
                            <div class="blog-title-area">
                                <Tags></Tags>
                                <PostShare></PostShare>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="banner-spot clearfix">
                                        <div class="banner-img">
                                            <img src="~/assets/upload/banner_01.jpg" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="invis1">
                            <Author></Author>
                            <hr class="invis1">
                            <CustomBox></CustomBox>
                            <hr class="invis1">
                            <Comment></Comment>
                            <hr class="invis1">
                            <CommentForm></CommentForm>
                        </div>
                    </div>
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
    import Tags from '~/components/Tags'
    import CommentForm from '~/components/CommentForm'
    import Comment from '~/components/Comment'
    import CustomBox from '~/components/CustomBox'
    import Author from '~/components/Author'
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
            PostShare,
            Tags,
            Comment,
            CommentForm,
            CustomBox,
            Author
        },

        computed: {
            ...mapState({
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