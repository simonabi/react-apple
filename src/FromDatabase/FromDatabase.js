import React, { useState, useEffect } from "react";

export default function FromDatabase() {
    const [database, setDatabase] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/iphoneData")
            .then((res) => res.json())
            .then((jsonData) => {
                // console.log(jsonData.products);
                const products = jsonData.product;
                // const {products} = jsonData

                setDatabase(products);
            });
    }, []);
    //   console.log(database);
    let order = 1;
    return (
        <div>
            <section className="internal-page-wrapper top-100">
                <div className="container">
                    {database?.map((product,i) => {
                        const {
                            product_url,
                            product_name,
                            product_img,
                            product_brief_description,
                            starting_price,
                            price_range,
                            product_description,
                        } = product;

                        let order1 = 1;
                        let order2 = 2;
                        if (order !== 1) {
                            order1 = 2;
                            order2 = 1;
                            order--;
                        } else {
                            order++;
                        }

                        let productPage = "/iphone/" + product_url;
                        let productDiv = (
                            <div key={i} className="bottom-100">
                                <div className="row justify-content-center text-center bottom-50">
                                    <div className="col-12">
                                        <div className="title-wrapper bold">{product_name}</div>
                                        <div className="brief-description">
                                            {product_brief_description}
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center text-center product-holder h-100">
                                    <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                                        <div className="starting-price">
                                            {`Starting at ${starting_price}`}
                                        </div>
                                        <div className="monthly-price">{price_range}</div>
                                        <div className="product-details">{product_description}</div>
                                    </div>

                                    <div className={`col-sm-12 col-md-6 order-${order2}`}>
                                        <div className="prodict-image">
                                            <img src={product_img} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        return productDiv;
                    })}
                </div>
            </section>
        </div>
    );
}