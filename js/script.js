var app = new Vue({

    el: "#root",

    data: {

        currentPhoto: 0,

        photos: [

            "img/img_1.jpg",

            "img/img_2.jpg",

            "img/img_3.jpg",

            "img/img_4.jpg"
        ]
    },

    created: function() {

        setInterval(() => {

            this.nextPhoto();

        }, 3000)
    },

    methods: {

        prewPhoto: function() {

            this.currentPhoto -= 1;

            if (this.currentPhoto < 0) {

                this.currentPhoto = (this.photos.length - 1 );
            }
        },

        nextPhoto: function() {

            this.currentPhoto += 1;

            if (this.currentPhoto > (this.photos.length - 1)) {

                this.currentPhoto = 0;
            }

        }

    }
})