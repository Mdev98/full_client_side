import './home.css';
import React, {useEffect, useState} from "react";
import BoxInfo from '../../components/boxinfo/BoxInfo';
import Swidget from '../../components/widget/small/Swidget';
import Lwidget from '../../components/widget/large/Lwidget';
import Chart from '../../components/charts/Chart';
import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhYzFiYjQwYTA5NzQxMzZlM2MyMmMiLCJpYXQiOjE2MzU5NTY1MDd9.PZ_cx6_soGQ_gZXKY5LLBdYMHwCjhcF1c3TgI863GBs'


export default function Home() {

    const [sellerData, setSellerData] = useState({});
    const [chartData, setChartData] = useState([]);

    useEffect(() =>{

        const loadData = async () => {
           

            try{
                const response = await axios.all([
                    axios.get("http://localhost:3001/api/v3/seller"),
                    axios.get("http://localhost:3001/api/v3/user/stats"),
                ]);

                const [data1, data2] = response


                setSellerData(data1.data);
                setChartData(data2.data);
            }catch(error){
                console.error(error);
            }
            
        }
        loadData()
    },[])

    return (
        <div className='home'>
            <BoxInfo info={sellerData} />
            <Chart data={chartData} />
            <div className="homeWidget">
                <Swidget />
                <Lwidget />
            </div>
        </div>
    )
}
