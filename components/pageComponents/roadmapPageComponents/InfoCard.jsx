import Image from "next/image";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import {GotoClass} from "../../ActionChip";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import Link from "next/link";

export const InfoCard = ({className, image, platform, price, language, certificate, link}) => {
    return (
        <div className={'flex py-5 flex-col bg-white border-1 border-neutral-200 rounded-md px-8 ' + className}>
            <Image src={image ? image : 'https://i.imgur.com/mrIuHoC.jpg'} width={40} height={200} alt={'Course Image'}/>
            <Link href={link}>
                <a><GotoClass/></a>
            </Link>

            <div className={'mx-4 mt-5'}>
                <div className={'border-b-1 flex py-2'}>
                    <AutoGraphIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>{platform}</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CurrencyRupeeOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>{price}</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CommentOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>{language}</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CardMembershipOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>{certificate}</span>
                </div>

                <div className={'border-b-1 flex py-2'}>
                    <CalendarTodayOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>Self Paced</span>
                </div>

            </div>

        </div>
    )
}

export default InfoCard;