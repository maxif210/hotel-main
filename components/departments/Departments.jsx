import Image from "next/image";
import styles from "./Departments.module.css";
import room1 from "../../public/departments/room1.png";

const Departments = () => {
  return (
    <section className={styles.departments}>
      <div className="container">
        <div className={styles.departmentsContainer}>
          <div className={styles.titleContainer}>
            <h4>Nuestros Departamentos</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              viverra parturient diam sagittis nec cras.
            </p>
          </div>
          <div className={styles.departmentContainer}>
            <div className={styles.departmentCard}>
              <Image src={room1} alt="habitacion" layout="responsive" width={260} height={250} />
              <div className={styles.titleAndPrice}>
                <h5>Family Room</h5>
                <span>$799</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt leo et Loremuntur veritatis. Pariatur, natus facilis
              </p>
            </div>

            <div className={styles.departmentCard}>
            <Image src={room1} alt="habitacion" layout="responsive" width={260} height={250} />
              <div className={styles.titleAndPrice}>
                <h5>Family Room</h5>
                <span>$799</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt leo et Lorem ipsum doaque rem vel paab officiis cum
                debitis?
              </p>
            </div>

            <div className={styles.departmentCard}>
            <Image src={room1} alt="habitacion" layout="responsive" width={260} height={250} />
              <div className={styles.titleAndPrice}>
                <h5>Family Room</h5>
                <span>$799</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt nda architecto a corrupti quae, dignissimos non
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
