import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
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
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;