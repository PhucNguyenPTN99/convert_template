<template>
    <div>
        <Header></Header>
        <section class="section lb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget-no-style">
                                <Subscribe></Subscribe>
                            </div>
                            <div id="" class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="~/assets/upload/banner_03.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4>Who we are</h4>
                                    <p>Markedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                </div>
                                <div class="col-lg-6">
                                    <h4>How we help?</h4>
                                    <p>If you’d like to write for us, <a href="#">advertise with us</a> or just say hello, fill out the form below and we’ll get back to you as soon as possible.</p>
                                </div>
                            </div>
                            <hr class="invis">
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Subscribe from '~/components/Subscribe'
import ContactForm from '~/components/ContactForm'

export default {
    components: {
        Header,
        Footer,
        Subscribe,
        ContactForm
    }
}
</script>
