import React from 'react';
import { NextPage } from 'next';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Breadcrumbs from '@components/breadcrumbs';
import Review from '@components/review';
import LeaveFeedback from '@components/leave-feedback';
import SimilarOrgs from '@components/similar-orgs';
import OrgGallery from '@components/org-gallery';
import Clock from '@svg/clock.svg';
import Home from '@svg/home.svg';
import Phone from '@svg/phone.svg';
import Url from '@svg/url.svg';
import './style.scss';
import { useSelector } from 'react-redux';
import { IStore } from '@redux/IStore';
import PageWrapper from '@components/page-wraper';

const Detail: NextPage = () => {
  const { detail } = useSelector((state: IStore) => state);

  return (
    <PageWrapper title={`${detail.title}. ВнеШкола`}>
      <div className="container">
        <Breadcrumbs breadcrumbs={detail.breadcrumbs}/>
      </div>

      <div className="content">
        <section className="section">
          <div className="container">
            <div className="row detail__grid">
              <div className="col-12 col-lg-6 mt-3">
                <div className="detail-info">
                  <h1 className="page-title">{detail.title}</h1>

                  <div className="page-subtitle">{detail.subtitle}</div>

                  <div className="detail-info__org-name">{detail.juridicalName}</div>

                  <div className="detail-info__data">
                    <div className="detail-info-row">
                      <Home/>
                      <div className="detail-info-row__text">{detail.address}</div>
                    </div>

                    <div className="detail-info-row">
                      <Clock/>
                      <div
                        className="detail-info-row__text"
                        dangerouslySetInnerHTML={{ __html: detail.hours }}
                      />
                    </div>

                    <div className="detail-info-row">
                      <Phone/>
                      <div className="detail-info-row__text">
                        {detail.phones.map((phone) => (
                          <div className="detail-info-row__phone">
                            <a href={`tel:${phone}`} className="detail-info-row-phone__number">
                              {phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="detail-info-row">
                      <Url/>
                      <div className="detail-info-row__text">
                        <a href="http://lorem-ipsum.ru">{detail.url}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-location mt-3">
                  <YMaps>
                    <Map
                      defaultState={{ center: [detail.lat, detail.lng], zoom: 12 }}
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <Placemark geometry={[detail.lat, detail.lng]}/>
                    </Map>
                  </YMaps>
                </div>
              </div>

              <div className="col-12 col-lg-6 mt-3 order-lg-first">
                <OrgGallery {...detail.gallery}/>

                <div
                  className="detail__description mt-3"
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="block-title">{`${detail.title} - отзывы`}</h2>

            <div className="row detail-review">
              <div className="col-12 col-lg-6">
                <div className="detail-review__item mt-4">
                  <Review rating={4} name="test" date="test" text="test"/>
                </div>

                <div className="detail-review__item mt-4">
                  <Review rating={3} name="test" date="test" text="test"/>
                </div>

                <div className="detail-review__item mt-4">
                  <Review rating={2} name="test" date="test" text="test"/>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="detail-review__item mt-4">
                  <Review rating={5} name="test" date="test" text="test"/>
                </div>

                <div className="detail-review__item mt-4">
                  <Review rating={1} name="test" date="test" text="test"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <LeaveFeedback/>
        </section>

        <section className="section">
          <SimilarOrgs similarOrgs={detail.similarOrgs}/>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Detail;
