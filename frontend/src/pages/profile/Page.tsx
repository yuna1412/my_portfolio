import "../../styles/pages/profile.scss";

export default function Profile() { 
    return (
        <div className="profile">
            <section className="profileSection">
                <h2 className="profileSection__title">Profile</h2>
                <div className="profileSectionWrapper">
                    <div className="profileInfo">
                        <img src="/images/sample02.jpg" alt="Sample Profile Image" className="profileInfo__image" />
                        <div className="profileInfo__texts">
                            <p className="profileInfo__name">名前：tesuto</p>
                            <p className="profileInfo__text">
                                主にフロントエンド開発を中心に携わってきました。<br/>
                                ワイヤーフレーム作成やコーディング等、フロントエンド領域の開発が得意です。<br/>
                            </p>
                        </div>
                    </div>
                    <div className="profileDetails">
                        <p>2022年　インターンにてWeb制作を行う。</p>
                        <p>2024年　エンジニアとしてキャリアを開始。現在に至る。</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

