import { useLoaderData } from "react-router-dom";

const AccountantDetailsPage = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            AccountantDetailsPage
        </div>
    );
};

export default AccountantDetailsPage;