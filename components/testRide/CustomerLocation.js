import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTestRideAddress, setTestRideCustomerPincode } from "../../store/testRide/actions";
import { useForm } from 'react-hook-form';

const CustomerLocation = () => {

    const testRideAddress = useSelector((state) => state.testRide.testRideAddress)
    const customerPincode = useSelector((state) => state.testRide.customerPincode)
    const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
    const dispatch = useDispatch();

    const dispAddress = (e) => {
        e.preventDefault();
        dispatch(setTestRideAddress(e.target.value))
    }
    const dispCustPinCode = (e) => {
        e.preventDefault();
        dispatch(setTestRideCustomerPincode(e.target.value))
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div>
            <div className="flex flex-row w-full">
                <div class="md:w-1/2 w-full" >
                    <form>
                        <p>
                            <label class="block w-full md:w-4/5 mb-4">
                                <div className="flex flex-row"><span class="text-gray-700">Customer Address</span>
                                    <span className="text-xs text-gray-400 mt-1">(required)</span></div>
                                <textarea name="Address" onChange={(e) => dispAddress(e)}
                                    value={testRideAddress}
                                    class="form-textarea border border-gray-300 mt-1 block w-full" rows="3" placeholder="Address"
                                    ref={register({ required: true })}> </textarea>
                            </label>
                            {errors.Address && <span className="text-red-600 text-xs">Address is required</span>}
                        </p>
                        <label class="block md:w-4/5 w-full">
                            <div className="flex flex-row"> <span class="text-gray-700">PinCode</span>
                                <span className="text-xs text-gray-400 mt-1">(required)</span></div>
                            <input class="form-input border border-gray-300 mt-1 block w-full"
                                value={customerPincode}
                                onChange={(e) => dispCustPinCode(e)}
                                name="Pincode"
                                ref={register({
                                    required: "Pincode is required",
                                    pattern: {
                                        value: /^(\d{6})$/,
                                        message: "Invalid pincode.",
                                    }
                                })}
                            />
                            {errors.Pincode && <span className="text-red-600 text-xs pt-2">{errors.Pincode.message}</span>}
                        </label>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default CustomerLocation;
