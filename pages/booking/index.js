import MultiStepFormBooking from '../../components/booking/MultiStepFormBooking'

import BookingNav from '../../components/navigation/bookingNav'

export default function Booking() {
    return (
        <div className="conatiner h-screen">
            <div className="sm:pt-20">
                <BookingNav />
            </div>
            <div className="sm:pt-10">

                <MultiStepFormBooking /></div>
        </div>
    )

}

