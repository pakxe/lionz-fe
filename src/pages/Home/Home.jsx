import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';

const dummy = {
  title: '이건 과제 제목입니다',
  contents:
    '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
  writer: 'FE',
  date: '마감일: 2001년 03월 24일',
};

const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));

const Home = () => (
  <Layout>
    <Footer />
    <PhotoContentContainer haveProfile data={a} />
    <Header />
  </Layout>
);

export default Home;
