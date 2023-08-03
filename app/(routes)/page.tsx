import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products copy";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage =async () => {
const billboard= await getBillboard("a0bfcf38-11b3-4726-a9dd-e67d806b3b87");
const products= await getProducts({isFeatured: true});

    return (  
        <Container>
            <div className="space-y-10 pb-10">
   <Billboard data={billboard}/>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
            </div>
        </Container>
    );
}
 
export default HomePage;
