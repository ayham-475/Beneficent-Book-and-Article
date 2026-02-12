import TransactionHistory from './TransactionHistory'
import MainBalance from './MainBalance';
import ProfitRadar from './ProfitRadar';


export default function FinancialHome(){
    return(
        <>
        <ProfitRadar />
        <MainBalance/>
        <TransactionHistory />
        
        </>
    );
}