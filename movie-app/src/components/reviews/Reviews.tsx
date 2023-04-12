import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react';
import { Movie } from '../interfaces/Movie';

type ReviewsProps = {
    getMovieData: any;
    movie?: Movie | null;
    reviews: any;
    setReviews: any;
};

const Reviews = ({ getMovieData, movie, reviews, setReviews }: ReviewsProps) => {
    const revText = useRef<HTMLTextAreaElement>(null);
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReview = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        let rev = revText.current;
        if (rev) {
            try {
                const response = await api.post('/api/v1/reviews', {
                    reviewBody: rev.value,
                    imdbId: movieId,
                });

                const updatedReviews = [...reviews, { body: rev.value }];

                rev.value = '';

                setReviews(updatedReviews);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt='' />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReview}
                                        revText={revText}
                                        labelText='Write a Review?'
                                        defaultValue=''
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {reviews?.map(
                        (r: {
                            body:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                        }) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            );
                        }
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
