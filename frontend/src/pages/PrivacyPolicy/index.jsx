import styles from './PrivacyPolicy.module.scss';

function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Информация об обработке персональных данных пользователей при использовании
                сервиса RIA TRAVEL.</h1>
            <h1 className={styles.heading}>1. Определение терминов.</h1>
            <p className={styles.text}>1.1. Персональные данные – любая информация, относящаяся к прямо или косвенно
                определенному, или определяемому физическому лицу (субъекту персональных данных).</p>
            <p className={styles.text}>1.2. Обработка персональных данных – любое действие (операция) или совокупность
                действий (операций), совершаемых с использованием средств автоматизации или без использования таких
                средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение
                (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ),
                обезличивание, блокирование, удаление и уничтожение персональных данных.</p>
            <p className={styles.text}>1.3. Сайт – официальный сайт компании RIA TRAVEL.</p>
            <p className={styles.text}>1.4. Компания – юридическое лицо ООО «RIA TRAVEL», зарегистрированное и
                действующее в соответствии с законодательством Республики Казахстан.</p>
            <h1 className={styles.heading}>2. Политика конфиденциальности.</h1>
            <p className={styles.text}>2.1. Компания RIA TRAVEL считает конфиденциальность персональных данных своих
                пользователей очень важной и обязуется обеспечить их защиту в соответствии с требованиями
                законодательства Республики Казахстан.</p>
            <p className={styles.text}>2.2. В рамках использования сайта и/или сервисов компании RIA TRAVEL пользователь
                соглашается на обработку своих персональных данных в соответствии с настоящей Политикой
                конфиденциальности.</p>
            <p className={styles.text}>2.3. Компания RIA TRAVEL собирает и хранит только те персональные данные
                пользователей, которые необходимы для оказания услуг, предоставляемых компанией, а также для выполнения
                своих обязательств перед пользователем.</p>
            <p className={styles.text}>2.4. Компания RIA TRAVEL не передает персональные данные пользователей третьим
                лицам без согласия пользователей, за исключением случаев, предусмотренных законодательством Республики
                Казахстан.</p>
            <p className={styles.text}>2.5. Компания RIA TRAVEL предпринимает все необходимые меры для защиты
                персональных данных пользователей, включая организацию доступа к ним только уполномоченным сотрудникам,
                использование современных методов шифрования и защиты информации.</p>
            <p className={styles.text}>2.6. Пользователь имеет право на доступ к своим персональным данным, на их
                изменение и удаление в соответствии с законодательством Республики Казахстан.</p>
            <p className={styles.text}>2.7. Компания RIA TRAVEL вправе использовать технологию "cookie" для сбора
                информации о посетителях сайта. "Cookie" – это небольшой файл, который отправляется на компьютер
                пользователя при посещении сайта и сохраняется на жестком диске. Компания использует файлы "cookie" для
                анализа потоков пользователей на сайте, а также для улучшения функциональности и удобства использования
                сайта.</p>
            <p className={styles.text}>2.8. Компания RIA TRAVEL не несет ответственности за содержание и политику
                конфиденциальности других сайтов и сервисов, на которые может ссылаться сайт компании RIA TRAVEL.</p>
            <p className={styles.text}>2.9. Компания RIA TRAVEL оставляет за собой право изменять Политику
                конфиденциальности в любое время без предварительного уведомления пользователей. Изменения вступают в
                силу с момента их опубликования на сайте компании RIA TRAVEL.</p>
            <p className={styles.text}>2.10. В случае изменения Политики конфиденциальности, компания RIA TRAVEL
                обязуется уведомить пользователей об этом путем размещения соответствующей информации на сайте компании
                или иным удобным для пользователей способом.</p>
            <p className={styles.text}>2.11. Пользователь, продолжая использовать сайт и/или сервисы компании RIA TRAVEL
                после вступления в силу изменений в Политике конфиденциальности, считается принявшим эти изменения и
                согласившимся с ними.</p>
            <p className={styles.text}>2.12. В случае возникновения вопросов по вопросам обработки персональных данных
                пользователей, пользователи могут связаться с компанией RIA TRAVEL через контактные данные, указанные на
                сайте компании.</p>
        </div>
    );
}

export default PrivacyPolicy;