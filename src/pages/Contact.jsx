import Wrapper from "../common/Wrapper"
const styles={
    package:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        border: "2px solid black",
        marginBottom: "10px",
        padding: "10px",
     },
    
    product:{
        width:" 80%"
     },
    
    main:{
        display: "flex",
        justifyContent: "center",
     },
    
    images:{
        padding: "10px",
     },
};
export default function Contact() {
  return (
    <div>
    <Wrapper>
    <div class="main" style={styles.main}>
        <div class="product" style={styles.product}>
            <div class="package" style={styles.package}>
                <div class="images" style={styles.images}>
                <img src="https://media.istockphoto.com/id/1455773116/photo/businesswoman-handing-her-colleague-a-document.webp?b=1&s=170667a&w=0&k=20&c=t3O5tnDVa0J5jiJI5iRtJnrMtU_kGLe2j2esEsWTU5s=" alt="img1" style={{height:"200px",width:"200px"}}/>
                </div>
                <div class="images" style={styles.images}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet minus excepturi voluptate eaque beatae eligendi sequi,
                 vel ab molestiae nisi at quo nemo ducimus reprehenderit cupiditate. Ad, maxime ab.</p>
                </div>
            </div>
            <div class="package"  style={styles.package}>
                <div class="images" style={styles.images}>
                <img src="img/product2.jfif" alt="product2 " style={{}}/>
                </div>
                <div class="images" style={styles.images}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, reiciendis blanditiis? Excepturi tenetur perferendis molestiae provident ipsa eos necessitatibus
                atis doloribus quasi dicta!</p>
                </div>
            </div>
            <div class="package"  style={styles.package}>
                <div class="images" style={styles.images}>
                    <img src="img/product3.jfif" alt="product3" style={{}}/>
                </div>
                <div class="images">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt explicabo, dignissimos est quae porro obcaecati nulla repudiandae reiciendis
                 ror!</p>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
    </div>
  )
}
