Vue.component('article-components', {
    data() {
       return {
          renderItem: '',
          contentArticles: [
             {
                title: "Let’s Get Solution for Building Construction Work",
                img: "img/blogDetails/kitchen-img.svg",
                tag: "Kitchen"
             },
             {
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                img: "img/PromoBG.svg",
                tag: "Bedroom"
             },
             {
                title: "Best For Any Office & Business Interior Solution",
                img: "img/latestPost.svg",
                tag: "Building"
             },
             {
                title: "Let’s Get Solution for Building Construction Work",
                img: "img/blogDetails/kitchen-img.svg",
                tag: "Architecture"
             },
             {
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                img: "img/PromoBG.svg",
                tag: "Kitchen Planning"
             },

          ],
          buttonList: [
             "Kitchen",
             "Bedroom",
             "Building",
             "Architecture",
             "Kitchen Planning",
             "Bedroom"
          ]
       }
    },
    template: `
   <div class="blog-details__container">
       <div class="blog-details">
          <div class="article" v-for="(article, index) in filterArticle" :key="index">
             <h2 class="article__title">{{ article.title }}</h2>
             <img class="article__img" :src="article.img" :alt="article.img">
             <div class="article__info">
                <p class="article__info-date">26 December,2022</p>
                <p class="article__info-link">Interior / Home / Decore</p>
             </div>
             <div class="article__text"><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable</p>.
             <br>
             <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p></div>
             
             <div class="quote">
                <p class="quote__start">&#8221;</p>
                <p class="quote__text">The details are not the details. They make the design.</p>
             </div>
             <h2 class="article__title">Design sprints are great</h2>
             <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p>
             <div class="article__list">
                <div class="article__list-item">
                   <p class="article__list-item_number">1</p>
                   <p class="article__list-item_text">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-item">
                   <p class="article__list-item_number">2</p>
                   <p class="article__list-item_text">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-item">
                   <p class="article__list-item_number">3</p>
                   <p class="article__list-item_text">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
             </div>
             <img class="article__img" src="img/blogDetails/kitchen2.svg" alt="article 1_1">
             <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
       </div>
       
       <div class="tags">
          <div class="tags__buttons-wrap">
             <h2 class="tags__title">Tags</h2>
             <div class="tags__buttons">
                <button v-for="btn in buttonList" @click="filterClick(btn)" class="tags__buttons-item">{{ btn }}</button>
             </div>
          </div>
       </div>
 
    </div>
    `,
    methods: {
       filterClick(item) {
          this.renderItem = item;
       }
    },
    computed: {
       filterArticle() {
          return this.renderItem ? this.contentArticles.filter((el) => el.tag.includes(this.renderItem)) :
             this.contentArticles
       }
    },
 });
 
 new Vue({
    el: '.blogDetails__main',
 });