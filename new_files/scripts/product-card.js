$(document).ready(function () {

    //for images
    $('.product-card-img-small').on('click', function (e) {
        e.preventDefault();

        const $this = $(this);
        const imageSrc = $this.attr('href');
        const imageTitle = $this.find('img').attr('title');

        $('.product-card-img-small').removeClass('active');
        $this.addClass('active');

        $('.product-card-img-big')
            .attr({
                href: imageSrc,
                'data-title': imageTitle
            })
            .find('img')
            .attr('src', imageSrc);
    });

    //for choose weight
    $('.product-card-choose-item').on('click', function () {
        const $this = $(this);
        $('.product-card-choose-item').removeClass('active');
        $this.addClass('active');
        $('.product-card-article').html(
            'арт.&nbsp;' + $this.data('article')
        );
        $('.product-card-price-new').text(
            $this.data('price-new')
        );
        $('.product-card-price-old').text(
            $this.data('price-old')
        );
    });
});