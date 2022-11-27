import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Advertisement from '../Advertisement/Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;