import React from 'react';
import styles from '../informacion.module.css'

const Cookies = () => {
    return (
        <div id={styles.container}>
            <h2>Política de <span className='elaGreen'>Cookies</span></h2>

            <section className={styles.section}>
                <h3>Nuestra política de cookies</h3>

                <p>Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar.</p>
            </section>

            <section className={styles.section}>
                <h3>Tipos de cookies que utilizamos</h3>

                <p>Esta página web utiliza cookies de terceros que son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</p>

                <p>En este caso las Cookies son utilizadas con fines estadísticos relacionados con las visitas que recibe y las páginas que se consultan, quedando aceptado su uso al navegar por ella.</p>
            </section>

            <figure className={styles.figure}>
                <div className={styles.table_container}>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th><b>Cookie</b></th>
                                <th><b>Duracion</b></th>
                                <th><b>Descripción</b></th>
                            </tr>
                            <tr>
                                <td>__cfduid (notin.es)	</td>
                                <td>Sesión</td>
                                <td>Publicidad</td>
                            </tr>
                            <tr>
                                <td>personalization_id (twitter.com)</td>
                                <td>Sesión</td>
                                <td>Twitter</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>Publicidad, estadísticas y mediciones</td>
                                <td>Coloca Cookies en el ordenador o dispositivo y recibe la información almacenada en ellas cuando utilizas o visitas servicios prestados por otras empresas que utilizan los servicios de Facebook.</td>
                            </tr>
                            <tr>
                                <td>_ga (Google)</td>
                                <td>2 años</td>
                                <td>Se usa para distinguir a los usuarios.</td>
                            </tr>
                            <tr>
                                <td>_gid (Google)</td>
                                <td>24 horas</td>
                                <td>Se usa para distinguir a los usuarios.</td>
                            </tr>
                            <tr>
                                <td>_gat (Google)</td>
                                <td>1 minuto</td>
                                <td>Se usa para limitar el porcentaje de solicitudes. Si has implementado Google Analytics mediante Google Tag Manager, esta cookie se llamará _dc_gtm_.</td>
                            </tr>
                            <tr>
                                <td>_gali (Google)</td>
                                <td>Persistente</td>
                                <td>Atribución de enlace mejorada.</td>
                            </tr>
                            <tr>
                                <td>_unam (SHARETHIS)</td>
                                <td>30s</td>
                                <td>Su finalidad es cuantificar el número de Usuarios que comparten un determinado contenido y cuántas páginas web son visitadas a raíz de esa acción.</td>
                            </tr>
                            <tr>
                                <td>Persistente</td>
                                <td>2 años</td>
                                <td>Utilizado para el correcto funcionamiento del gestor de contenido WordPress.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </figure>

            <section className={styles.section}>
                <p>Si desea más información más sobre los tipos de cookies de seguimiento y análisis de datos de Google <a href="https://policies.google.com/technologies/cookies?hl=es&gl=es#types-of-cookies">haga clic aquí</a>.</p>
            </section>

            <section className={styles.section}>
                <h3>Eliminar cookies de su explorador</h3>

                <p><b>●</b> <a className={styles.a} href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">Firefox</a></p>
                <p><b>●</b> <a className={styles.a} href="https://support.google.com/chrome/answer/95647?hl=es">Chrome</a></p>
                <p><b>●</b> <a className={styles.a} href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d">Internet Explorer</a></p>
                <p><b>●</b> <a className={styles.a} href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Safari</a></p>
                <p><b>●</b> <a className={styles.a} href="https://allaboutcookies.org/es-administrar-las-cookies-en-opera">Opera</a></p>
            </section>
        </div>
    );
};

export default Cookies;