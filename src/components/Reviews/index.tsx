import React from "react";
import Slider from "react-slick";
import Arrow from "../ArrowPastNext";
import { reviewsData } from "../data/reviewsData";
import { MapIcon } from "lucide-react";
import "./reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= rating ? "star filled" : "star"}>
                ★
            </span>
        );
    }
    return stars;
}

const laundryIcons = ['🧺', '👕', '🧼', '🫧', '👚', '🧽', '🧴', '🧦'];

export default function Reviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="reviews" id="reviews">
            <h2 className="reviews__title">O que estão dizendo sobre nós</h2>
            <p className="reviews__subtitle">Confira o que os nossos clientes dizem</p>
            <Slider {...settings} className="reviews__list">
                {reviewsData.map(({ id, name, rating, comment }, index) => (
                    <div key={id} className="review-card">
                        <div className="review-quote">❝</div>
                        <div className="review-avatar">
                            <span>{laundryIcons[index % laundryIcons.length]}</span>
                        </div>
                        <div className="review-header">
                            <strong>{name}</strong>
                            <div className="review-rating">{renderStars(rating)}</div>
                        </div>
                        <p className="review-comment">{comment}</p>
                    </div>
                ))}
            </Slider>

            <div className="review-cta">
                <div className="review-cta">
                    <h2 className="review-cta__title">Nos avalie também!</h2>
                    <p className="review-cta__text">
                        Deixe sua avaliação em nosso perfil do Google Meu Negócio
                    </p>
                    <a
                        href="https://www.google.com/maps/place/Eco+Lavanderia+Express/@-19.9299202,-43.9484361,17z/data=!4m8!3m7!1s0xa6997c5493de75:0x92ff63572a8348a0!8m2!3d-19.9299325!4d-43.9454122!9m1!1b1!16s%2Fg%2F11x7n6tvg5?hl=pt-BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="review-cta__button"
                    >
                        <MapIcon size={24} style={{ marginRight: '0.75rem' }} />
                        Enviar avaliação agora
                    </a>
                </div>

            </div>

        </section>
    );
}
