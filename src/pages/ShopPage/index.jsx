import React, { Component } from 'react';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/CollectionsOverview'
import CollectionPreview from '../../components/CollectionPreview';


const ShopPage = ({ collections }) => (

    <div className="shop-page">
        <CollectionsOverview />

    </div>

);



export default ShopPage;