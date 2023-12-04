import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

import Button from '@/components/ui/Button';

const HomePage = () => {
    return (
        <main className="w-full py-20 mx-auto lg:w-8/12 xl:w-5/12 md:py-32">
            <h2 className="mt-2 text-lg font-medium text-center text-gray-800">
                This is where you can do your authorization
            </h2>

            <div className="mt-4 flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-3">
                <Link href={ROUTES.SIGNIN}>
                    <Button text="Sign in" />
                </Link>

                <Link href={ROUTES.SIGNUP}>
                    <Button text="Sign up" />
                </Link>

                <Link href={ROUTES.PROFILE}>
                    <Button text="Profile" />
                </Link>
            </div>
        </main>
    );
};

export default HomePage;
