import React from "react";
import "./ShelterDetailPage.style.css"
import { useParams } from "react-router-dom";
import { faBone, faBowlFood, faBuilding, faCalendar, faCalendarDays, faClock, faLocationDot, faPaw, faPhone, faShopLock, faSitemap, faStethoscope, faUserDoctor, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapTest from "@/map/Map/Map";
import { useShelterDetails } from "@/hooks/useShelterDetails";

const ShelterDetailPage = () => {
  const { careNm } = useParams();
  const { data} = useShelterDetails({careNm});

  if (!data || !data.items || !data.items.item || !data.items.item.length) {
    return <div></div>;
  }

  const shelter = data.items.item.find(item => item.careNm === careNm);

  if (!shelter) {
    return <div className="shelter-error">보호소에 관한 데이터를 찾지 못했습니다</div>;
  }

  return (
    <div className="shelter-detail">
        <div className="paw-name">
        <FontAwesomeIcon icon={faPaw} className="font-paw"/>
        <h1>{shelter.careNm}</h1>
        </div>
      <div className="shelter-basic-info">
      <h2>정보</h2>
        <p><FontAwesomeIcon icon={faPhone} /> <strong>전화번호:</strong> {shelter.careTel}</p>
        <p><FontAwesomeIcon icon={faBuilding} /> <strong>동물보호소 유형:</strong> {shelter.divisionNm}</p>
        <p><FontAwesomeIcon icon={faSitemap} /> <strong>관리 기간명:</strong> {shelter.orgNm}</p>
        <p><FontAwesomeIcon icon={faCalendarDays} /> <strong>동물보호소 지정일자:</strong> {shelter.dsignationDate}</p>
      </div>

      <div className="shelter-hours">
        <h2>운영 시간</h2>
        <p><FontAwesomeIcon icon={faClock} /> <strong>평일 운영 시간:</strong> {shelter.weekOprStime} ~ {shelter.weekOprEtime}</p>
        <p><FontAwesomeIcon icon={faClock} /> <strong>주말 운영 시간:</strong> {shelter.weekendOprStime} ~ {shelter.weekendOprEtime}</p>
        <p><FontAwesomeIcon icon={faCalendar} /> <strong>휴무일:</strong> {shelter.closeDay}</p>
      </div>

      <div className="shelter-system">
        <h2>보호소 시설</h2>
        <div className="workers">
        <p><FontAwesomeIcon icon={faUserDoctor} /> <strong>수의사:</strong> {shelter.vetPersonCnt}명</p>
        <p><FontAwesomeIcon icon={faUserNurse} /> <strong>사양 관리사:</strong> {shelter.specsPersonCnt}명</p>
        </div>
        <div className="rooms">
        <p><FontAwesomeIcon icon={faStethoscope} /> <strong>진료실:</strong> {shelter.medicalCnt}</p>
        <p><FontAwesomeIcon icon={faBone} /> <strong>사육실:</strong> {shelter.breedCnt}</p>
        <p><FontAwesomeIcon icon={faShopLock} /> <strong>격리실:</strong> {shelter.quarabtineCnt}</p>
        <p><FontAwesomeIcon icon={faBowlFood} /> <strong>사료 보관실:</strong> {shelter.feedCnt}</p>
        </div>
      </div>

      <div className="shelter-location">
        <h2>오시는 길</h2>
        <p><FontAwesomeIcon icon={faLocationDot} /> <strong>{shelter.careAddr}</strong></p>
        <MapTest lat={shelter.lat} lng={shelter.lng} /> 
      </div>
    </div>
  );
};

export default ShelterDetailPage;
