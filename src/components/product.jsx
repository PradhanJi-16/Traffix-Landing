import "./product.css";

const Product = (() => {
    return (

        <section id="product" className="product">
            <div className="container">
                <div className="product-title">
                    <h2>Product Overview</h2>
                    <p>Three core components working together to revolutionize urban traffic management</p>
                </div>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <rect width="48" height="48" rx="12" fill="#59e397" />
                                <g>
                                    <rect x="14" y="19" width="20" height="12" rx="3" fill="#1b2e21" />
                                    <circle cx="24" cy="25" r="4" fill="#59e397" />
                                    <rect x="26" y="20" width="3" height="3" rx="1" fill="#59e397" />
                                    <rect x="17" y="17" width="6" height="3" rx="1.5" fill="#1b2e21" />
                                </g>
                            </svg>
                        </div>
                        <h4>CCTV Integration</h4>
                        <p>
                            Seamless integration with existing traffic cameras for real-time data collection and analysis.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <rect width="48" height="48" rx="12" fill="#ffe05a" />
                                <g>
                                    <path d="M20 16a4 4 0 0 0-4 4v8a4 4 0 1 0 4 4v-2h2v2a4 4 0 1 0 4-4v-2h-2v-2h2v-2a4 4 0 1 0-4-4v2h-2v-2a4 4 0 0 0-4-4z" fill="none" stroke="#222218" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <h4>AI Engine</h4>
                        <p>
                            Advanced machine learning algorithms that adapt to traffic patterns and optimize signal timing.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-icon">
                            <svg width="70" height="70" viewBox="0 0 48 48">
                                <rect width="48" height="48" rx="12" fill="#ff6871" />
                                <g>
                                    <rect x="12" y="16" width="24" height="16" rx="3" fill="none" stroke="#321618" stroke-width="2" />
                                    <rect x="22" y="34" width="4" height="2" rx="1" fill="#321618" />
                                </g>
                            </svg>
                        </div>
                        <h4>Authority Dashboard</h4>
                        <p>
                            Comprehensive control center for traffic authorities with real-time monitoring and analytics.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
})

export default Product;