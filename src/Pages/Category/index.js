import Products from "../../components/Products";
import { Breadcrumb } from 'antd';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Category(){
   
    return <div>
       <AppBreadCrumb />
        <Products />
    </div>
}

function AppBreadCrumb(){
    const param  = useParams();

       return( <Breadcrumb>
            <Breadcrumb.Item>{`Home / ${param.categoryId}`}</Breadcrumb.Item>
        </Breadcrumb>
       );
}
export default Category;
