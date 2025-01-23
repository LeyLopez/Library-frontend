import { OptionsButton } from "../../components/OptionsButton";


export const ClientNotification = () => {

  const notifications = [
    {
      id: 1,
      title: "Préstamo vencido",
      description: "El préstamo del libro 'Cien años de soledad' ha vencido",
    },
    {
      id: 2,
      title: "Préstamo vencido",
      description: "El préstamo del libro 'Don Quijote de la Mancha' ha vencido",
    },
    {
      id: 3,
      title: "Préstamo vencido",
      description: "El préstamo del libro '1984' ha vencido",
    },
    ];
  
    return (
      <div
        className="d-flex justify-content-center py-5"
        style={{
          position: "relative",
          width: "90%",
          marginBottom: "10%",
          marginLeft: "10%",
        }}
      >
        <div className="col-md-9">
          <OptionsButton title={"Notificaciones"} />
          <br />
          <div className="container" style={{ position: "relative", maxWidth: "90%" }}>
            {notifications.map((notifications) => (
              <div
                key={notifications.id}
                className="card mb-3"
                style={{
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  height: "10%",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{notifications.title}</h5>
                      <p>{notifications.description}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
